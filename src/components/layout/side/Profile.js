import React from "react";
import styles from './side.module.css'

const Profile = ({ title }) => {
  return <>
    <div className={styles.siderItem}>
      <h3 className={styles.siderTitle}>{title}</h3>
      <div className={styles.siderContent}>
        <dt>
          <dl>网名：drcus | 迪卡斯</dl>
          <dl>职业：web enginner</dl>
          <dl>Email：wyz10@qq.com</dl>
        </dt>
      </div>
    </div>
  </>
}

export default Profile