import React, {ObjectHTMLAttributes, ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ButtonProps = {
    children: ReactNode,
    href?: string
    type?: string
}

export const Button = function (props: ButtonProps): JSX.Element {
    let className = props.type === "primary" ?
        styles.buttonIsPrimary : styles.buttonIsSecondary

    if (props.href) {
        return (
            <a {...props} className={clsx('button', className)}>
                <span>{props.children}</span>
            </a>
        );
    }
    return (
        <button {...props} className={clsx('button', className)}>
            <span>{props.children}</span>
        </button>
    );
};

export const ButtonGroup = function ({children}): JSX.Element {
    return (
        <p className={styles.buttonGroup}>
          <span className={styles.buttonGroupContent}>
            {children}
          </span>
        </p>
    )
};