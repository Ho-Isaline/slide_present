import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClassfierCard } from "../components/ClassfierCard";
import { ModelParamsCard } from "../components/ModelParamsCard";
import { PreprocessingCard } from "../components/PreprocessingCard";
import { SelectedCard } from "../components/SelectedCard";
import { TrainingResult } from "../components/TrainingResult";
import { mockVisualizationData } from "./mockData";
import type { TextHandlingMode } from "../types/app";


export function Slide2() {
  const [selectedDataset, setSelectedDataset] = useState<string>("sms-spam");
  const [preprocessing, setPreprocessing] = useState({
    lowercase: true,
    removePunctuation: true,
    removeStopwords: true,
    lemmatize: true,
    handleUrlsEmails: "replace" as TextHandlingMode,
  });
  const [classifier, setClassifier] = useState({
    type: "LINEAR",
    hiddenNeurons: "64",
    dropout: 0.2,
  });
  const [modelParams, setModelParams] = useState({
    model: "distilbert-base-uncased",
    batchSize: "32",
    epochs: "3",
    learningRate: "2e-5",
    evalFreq: "500",
    trainValSplit: 80,
    fineTuneMode: "freeze-all",
  });
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasResults, setHasResults] = useState(true);

  const handleStartTraining = () => {
    setIsTraining(true);
    setProgress(0);
    setHasResults(false);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setHasResults(true);
          return 100;
        }
        return p + 10;
      });
    }, 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-6 text-3xl">Training</h1>

          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              <span className="inline-flex items-center gap-1">
                Model Name
              </span>
            </label>

            <input
              type="text"
              placeholder="e.g., IMDB-DistilBERT-v1"
              className="h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />

            <p className="mt-1 text-xs text-gray-500">
              Give your model a unique name for easy identification
            </p>
          </div>

          <div className="mb-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SelectedCard
                title="Dataset"
                selectedValue={selectedDataset}
                onSelectedValueChange={setSelectedDataset}
                options={[
                  { value: "ag-news", label: "AG News" },
                  { value: "sms-spam", label: "SMS Spam" },
                  { value: "imdb", label: "IMDB Reviews" },
                  { value: "upload", label: "Upload CSV", variant: "upload" }
                ]}
                selectLabel="Select Dataset"
                selectLabelTooltip="Choose a default dataset or upload your own CSV file."
                placeholder="Choose a dataset"
              />
              <PreprocessingCard
                lowercase={preprocessing.lowercase}
                removePunctuation={preprocessing.removePunctuation}
                removeStopwords={preprocessing.removeStopwords}
                lemmatization={preprocessing.lemmatize}
                trainSplit={modelParams.trainValSplit}
                stratifiedSplit={true}
                handleURLs={preprocessing.handleUrlsEmails}
                handleEmails={preprocessing.handleUrlsEmails}
                onLowercaseSwitchChange={(v) => setPreprocessing(p => ({ ...p, lowercase: v }))}
                onPunctuationSwitchChange={(v) => setPreprocessing(p => ({ ...p, removePunctuation: v }))}
                onStopwordsSwitchChange={(v) => setPreprocessing(p => ({ ...p, removeStopwords: v }))}
                onLemmatizationSwitchChange={(v) => setPreprocessing(p => ({ ...p, lemmatize: v }))}
                onTrainSplitChange={(v) => setModelParams(p => ({ ...p, trainValSplit: v }))}
                onStratifiedSplitChange={() => {}}
                onHandleURLsChange={(v) => setPreprocessing(p => ({ ...p, handleUrlsEmails: v }))}
                onHandleEmailsChange={(v) => setPreprocessing(p => ({ ...p, handleUrlsEmails: v }))}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ClassfierCard
                classifierType={classifier.type}
                hiddenNeurons={parseInt(classifier.hiddenNeurons)}
                dropout={classifier.dropout}
                onClassifierTypeChange={(v) => setClassifier(p => ({ ...p, type: v }))}
                onHiddenNeuronsChange={(v) => setClassifier(p => ({ ...p, hiddenNeurons: v.toString() }))}
                onDropoutChange={(v) => setClassifier(p => ({ ...p, dropout: v }))}
              />

              <ModelParamsCard
                model={modelParams.model}
                epochs={modelParams.epochs}
                batchSize={parseInt(modelParams.batchSize)}
                learningRate={modelParams.learningRate}
                evaluationFrequency={parseInt(modelParams.evalFreq)}
                fineTune={modelParams.fineTuneMode}
                unfreezeLastNLayers={3}
                onModelChange={(v) => setModelParams(p => ({ ...p, model: v }))}
                onEpochsChange={(v) => setModelParams(p => ({ ...p, epochs: v }))}
                onBatchSizeChange={(v) => setModelParams(p => ({ ...p, batchSize: v.toString() }))}
                onLearningRateChange={(v) => setModelParams(p => ({ ...p, learningRate: v }))}
                onEvaluationFrequencyChange={(v) => setModelParams(p => ({ ...p, evalFreq: v.toString() }))}
                onFineTuneModeChange={(v) => setModelParams(p => ({ ...p, fineTuneMode: v }))}
                onUnfreezeLastNLayersChange={() => {}}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={handleStartTraining}
                disabled={isTraining}
                className="h-11 px-8"
              >
                {isTraining ? "Training..." : "Start Training"}
              </Button>
            </div>

            {isTraining && (
              <div className="w-full max-w-md">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm">Training Progress</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>

                  <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
                    <span>Status</span>
                    <span className="font-medium text-gray-700">
                      {progress < 100 ? "Training in progress..." : "Completed"}
                    </span>
                  </div>

                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            )}
          </div>
        </div>
        <TrainingResult hasResults={hasResults} visualizationData={mockVisualizationData} />
      </main>
    </div>
  );
}
