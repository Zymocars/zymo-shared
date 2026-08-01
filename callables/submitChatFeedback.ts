/**
 * Callable: submitChatFeedback
 *
 * Records positive/negative feedback on a specific chat message. Also
 * increments daily aggregate counter under chatbot_analytics/daily/stats.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers-chatbot/ChatWithGeminiv2.js line 2419.
 */

export type ChatFeedbackValue = 'positive' | 'negative';

export interface SubmitChatFeedbackRequest {
  userId: string;
  messageId: string;
  feedback: ChatFeedbackValue;
}

export interface SubmitChatFeedbackResponse {
  success: true;
}
