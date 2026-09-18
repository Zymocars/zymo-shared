/**
 * Callable: submitChatFeedback
 *
 * Records positive/negative feedback on a specific chat message. Also
 * increments daily aggregate counter under chatbot_analytics/daily/stats.
 *
 * Backend implementation:
 *   `exports.submitChatFeedback` in zymo-backend/functions/chatbot/channels/chatCallable.js.
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
