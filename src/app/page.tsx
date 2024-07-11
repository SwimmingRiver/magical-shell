'use client';

import { useState } from 'react';
import MessageList from './components/messageList/page';
import styles from './page.module.css';

export default function Home() {
  const [inputData, setInputData] = useState('');
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setInputData('');
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.messageWrapper}>
        <MessageList />
        <div className={styles.inputWrapper}>
          <form onSubmit={submitHandler}>
            <input
              value={inputData}
              className={styles.input}
              placeholder="무엇이든지 물어보세요"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button type="button">send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
