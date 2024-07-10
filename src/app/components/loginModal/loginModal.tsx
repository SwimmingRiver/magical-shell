import React from 'react';
import styles from './loginModal.module.css';

function LoginModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_wrapper}>
        <div>Login</div>
        <form className={styles.form}>
          <input placeholder="id" />
          <input placeholder="pw" />
          <button type="button">로그인</button>
        </form>
        <p>회원 가입</p>
        <p className={styles.no_login}>로그인 없이 이용하기</p>
      </div>
    </div>
  );
}

export default LoginModal;
