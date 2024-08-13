import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren } from 'react'

const cx = classNames.bind(styles)

// <Accordion label="신랑측">컨텐츠</Accordion>

interface AccordionProps {
  label: string
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  return (
    <div className={cx('wrap-accordion')}>
      <div className={cx('wrap-header')}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  )
}

export default Accordion
