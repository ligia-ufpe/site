import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, ArrowLeft, Play, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReinforcementLearningPage() {
  const examples = [
    {
      title: "Q-Learning Implementation",
      description: "Step-by-step implementation of Q-Learning algorithm in Python.",
      codeSnippet: `import numpy as np

class QLearning:
    def __init__(self, states, actions, alpha=0.1, gamma=0.9):
        self.q_table = np.zeros((states, actions))
        self.alpha = alpha  # learning rate
        self.gamma = gamma  # discount factor`
    },
    {
      title: "Policy Gradient Methods",
      description: "Implementation of basic policy gradient algorithm.",
      codeSnippet: `def policy_gradient(state, weights):
    action_probs = softmax(np.dot(state, weights))
    action = np.random.choice(len(action_probs), p=action_probs)
    return action`
    },
    {
      title: "Deep Q-Network (DQN)",
      description: "PyTorch implementation of DQN with experience replay.",
      codeSnippet: `class DQN(nn.Module):
    def __init__(self, input_size, output_size):
        super(DQN, self).__init__()
        self.network = nn.Sequential(
            nn.Linear(input_size, 64),
            nn.ReLU(),
            nn.Linear(64, output_size)
        )`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Reinforcement Learning Examples - Ligia UFPE</title>
        <meta
          name="description"
          content="Collection of practical examples and implementations of reinforcement learning algorithms."
        />
      </Helmet>
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/materials"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Materials
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Bot className="w-12 h-12 text-[#FF4B1F]" />
                <h1 className="text-4xl font-bold">Reinforcement Learning Examples</h1>
              </div>

              <p className="text-xl text-gray-300 mb-12">
                Explore practical implementations of various reinforcement learning algorithms,
                complete with code examples and explanations.
              </p>

              <div className="grid gap-8">
                {examples.map((example, index) => (
                  <motion.div
                    key={example.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Play className="w-5 h-5 text-[#FF4B1F]" />
                        {example.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{example.description}</p>
                      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{example.codeSnippet}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}