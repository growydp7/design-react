// https://juejin.cn/post/6968739546997456926#heading-3
import React from 'react'

import type { ButtonType, ButtonShape } from './buttonHelpers'
import type { SizeType } from '../config-provider/SizeContext';

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode
}

// Omit 以一个类型为基础支持剔除某些属性，然后返回一个新类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>;

export type NativeButtonProps = {

}

// Partial
// https://blog.csdn.net/roamingcode/article/details/104111165
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  console.log(props, ref)
  return (
    <button>测试</button>
  )
}

// React.forwardRef
// https://react.docschina.org/docs/forwarding-refs.html
const Button = React.forwardRef(InternalButton)

export default Button