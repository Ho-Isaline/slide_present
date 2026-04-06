import { type TrainingVisualizationData } from "../components/TrainingVisualizations";

export const mockVisualizationData: TrainingVisualizationData = {
  metrics: {
    accuracy: 0.925,
    precision: 0.912,
    recall: 0.934,
    f1_score: 0.923,
  },
  confusion_matrix: {
    labels: ["Negative", "Positive"],
    matrix: [
      [450, 50],
      [30, 470],
    ],
    normalize: false,
  },
  learning_curves: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    train_loss: [0.8, 0.6, 0.45, 0.35, 0.28, 0.22, 0.18, 0.15, 0.12, 0.1],
    val_loss: [0.85, 0.65, 0.5, 0.42, 0.38, 0.35, 0.33, 0.32, 0.31, 0.32],
    train_acc: [0.6, 0.7, 0.78, 0.85, 0.89, 0.92, 0.94, 0.95, 0.96, 0.97],
    val_acc: [0.58, 0.68, 0.75, 0.8, 0.83, 0.85, 0.87, 0.88, 0.89, 0.89],
  },
  attention_visualization: {
    text: "This movie was absolutely fantastic and I loved it.",
    tokens: ["This", "movie", "was", "absolutely", "fantastic", "and", "I", "loved", "it", "."],
    scores: [0.05, 0.05, 0.05, 0.2, 0.3, 0.05, 0.05, 0.2, 0.02, 0.03],
  },
  embedding_2d: {
    points: [
      { x: 1.2, y: 3.4, label: "Positive", text: "Great movie" },
      { x: -2.1, y: -1.5, label: "Negative", text: "Terrible plot" },
      { x: 1.5, y: 2.8, label: "Positive", text: "Loved the acting" },
      { x: -1.8, y: -2.2, label: "Negative", text: "Waste of time" },
      { x: 0.5, y: 1.1, label: "Positive", text: "Pretty good" },
      { x: -0.5, y: -0.8, label: "Negative", text: "Not my favorite" },
    ],
    legend: ["Negative", "Positive"],
  },
};
