/**
 * Callable: ChatWithGeminiv2
 *
 * Main chatbot endpoint. Accepts both authenticated (uses Firebase UID) and
 * guest sessions (uses phoneNumber or app-supplied userId). Streams Gemini
 * response and persists to chathistory/{userId}/messages/{messageId}.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers-chatbot/ChatWithGeminiv2.js line 1436.
 */

export interface ChatWithGeminiv2Request {
  userId?: string;
  phoneNumber?: string;
  message: string;
  conversationId?: string;
  contextHints?: {
    city?: string;
    carId?: string;
    bookingId?: string;
  };
}

export interface ChatWithGeminiv2Response {
  messageId: string;
  responseText: string;
  userId: string;
  isGuest: boolean;
  conversationId: string;
  suggestedActions?: Array<{ label: string; action: string; params?: Record<string, unknown> }>;
}
