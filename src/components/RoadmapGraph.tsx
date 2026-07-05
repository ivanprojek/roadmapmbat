'use client';

import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  NodeTypes,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { RoadmapNode, RoadmapPath } from '@/types';
import { useRoadmapStore } from '@/lib/store';
import { RoadmapNodeComponent } from './RoadmapNodeComponent';

const nodeTypes: NodeTypes = {
  roadmap: RoadmapNodeComponent,
};

interface RoadmapGraphProps {
  roadmap: RoadmapPath;
}

export function RoadmapGraph({ roadmap }: RoadmapGraphProps) {
  const getNodeProgress = useRoadmapStore((state) => state.getNodeProgress);

  // Create nodes from roadmap data
  const nodes: Node[] = useMemo(() => {
    const phases = roadmap.nodes.reduce<Record<number, RoadmapNode[]>>((acc, node) => {
      acc[node.phase] = acc[node.phase] ? [...acc[node.phase], node] : [node];
      return acc;
    }, {});

    return Object.entries(phases).flatMap(([phaseKey, phaseNodes]) => {
      const phase = Number(phaseKey);
      return phaseNodes.map((node, index) => {
        const progress = getNodeProgress(roadmap.id, node.id);

        return {
          id: node.id,
          data: {
            label: node.title,
            node: node,
            progress,
          },
          position: {
            x: (phase - 1) * 320,
            y: index * 170,
          },
          type: 'roadmap',
        };
      });
    });
  }, [roadmap, getNodeProgress]);

  // Create edges from prerequisites
  const edges: Edge[] = useMemo(() => {
    const edgeList: Edge[] = [];
    
    roadmap.nodes.forEach((node) => {
      if (node.prerequisites) {
        node.prerequisites.forEach((prereqId) => {
          edgeList.push({
            id: `${prereqId}-${node.id}`,
            source: prereqId,
            target: node.id,
            type: 'smoothstep',
            animated: true,
            markerEnd: { type: MarkerType.ArrowClosed },
            style: {
              stroke: '#D4A5A5',
              strokeWidth: 2,
            },
          });
        });
      }
    });

    return edgeList;
  }, [roadmap.nodes]);

  const [flowNodes, , onNodesChange] = useNodesState(nodes);
  const [flowEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-screen bg-warm-white dark:bg-dark-bg">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background
          color="#E8D5D1"
          gap={16}
          size={1}
        />
        <Controls />
        <MiniMap
          style={{
            backgroundColor: '#F5F1E8',
          }}
          maskColor="#FAF9F6"
        />
      </ReactFlow>
    </div>
  );
}
