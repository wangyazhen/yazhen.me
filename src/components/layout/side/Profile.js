import React from "react";
import styles from './side.module.css'

const Profile = ({ title }) => {
  return <>
    <div className={styles.siderItem}>
      <h3 className={styles.siderTitle}>{title}</h3>
      <div className={styles.siderContent}>
        <dt>
          <dl>网名：drcus | 迪卡斯 | 潜默</dl>
          <dl>职业：Web Enginner</dl>
          <dl>Email：wyz10@qq.com</dl>
          <dl>微信：</dl>
          <dl align="center">
            <img style={{width: '60%'}} src="/images/site-icons/drcus.png" />
          </dl>
        </dt>
      </div>
    </div>
  </>
}

export default Profile