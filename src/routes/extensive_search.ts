import express from 'express';
import logger from '../utils/logger';
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { Embeddings } from "@langchain/core/embeddings";
import { ChatOpenAI } from '@langchain/openai';
import {
  getAvailableChatModelProviders,
  getAvailableEmbeddingModelProviders,
} from '../lib/providers';
import { searchHandlers } from '../websocket/messageHandler';
import { AIMessage, BaseMessage, HumanMessage } from '@langchain/core/messages';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        return res
          .status(200)
          .json({ message: 'Advance search heheheheheh' });
    } catch (err: any) {
        logger.error(`Error in getting search results: ${err.message}`);
        res.status(500).json({ message: 'An error has occurred.' });
    }
});
export default router;
