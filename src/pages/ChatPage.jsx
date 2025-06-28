import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000'); // update with your backend URL

function ChatPage({ currentUser, otherUser }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const roomId = [currentUser.id, otherUser.id].sort().join('-');
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Join room on mount
    socket.emit('join_room', roomId);

    // Receive message event
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    // Fetch existing messages from backend on load
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/messages/${currentUser.id}/${otherUser.id}`);
        setMessages(res.data);
      } catch (err) {
        console.error('Failed to load messages', err);
      }
    };

    fetchMessages();

    return () => {
      socket.off('receive_message');
    };
  }, [roomId, currentUser.id, otherUser.id]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      content: message,
      senderId: currentUser.id,
      receiverId: otherUser.id,
      roomId,
      createdAt: new Date().toISOString(),
    };

    socket.emit('send_message', data);
    setMessages((prev) => [...prev, data]);
    setMessage('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with {otherUser.fullName}</h2>

      <div className="border p-4 h-64 overflow-y-scroll mb-4 bg-white rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.senderId === currentUser.id ? 'text-right' : 'text-left'}`}
          >
            <p className="inline-block bg-gray-100 px-3 py-2 rounded">
              {msg.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border px-4 py-2 rounded"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
