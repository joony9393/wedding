import styles from './Video.module.scss'
import classNames from 'classnames/bind'

import Section from '../shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      {/* 
        적응형 비트레이트 스트리밍 
        네트워크 품질에 따라서 최적의 품질을 적용  
      */}
      {/* control 옵션주면 음량, 재생 등 유트브처럼 나옴 */}
      {/* poster -> 썸네일 처럼 사용 가능 */}
      <video autoPlay loop muted poster="/assets/poster.jpg">
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
