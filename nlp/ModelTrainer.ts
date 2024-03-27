import { DistilBertForSequenceClassification, DistilBertTokenizer } from "@xenova/transformers";

export class ModelTrainer {
    constructor(
        private tokenizer: DistilBertTokenizer,
        private model: DistilBertForSequenceClassification,
    ) { }
}