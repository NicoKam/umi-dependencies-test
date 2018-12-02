import { DatePicker } from "antd";
import test from 'umi-style-dependencies-test';
import styles from './index.css';
console.log(test);

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      下面引用了antd的DatePicker。如果样式失效，将.umirc 中的dll注释即可
      <DatePicker />
    </div>
  );
}
