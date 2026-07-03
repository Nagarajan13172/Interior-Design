import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  /** Optional leading/trailing icons. */
  iconLeft?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer'

const variants: Record<Variant, string> = {
  // Orange CTA (primary action) — per brand: "orange call-to-action buttons"
  primary:
    'bg-brandOrange text-white shadow-gold hover:bg-brandGold hover:-translate-y-0.5 hover:shadow-cardHover active:translate-y-0',
  // Gold gradient
  secondary:
    'bg-gold-gradient text-black shadow-gold hover:-translate-y-0.5 hover:shadow-cardHover active:translate-y-0',
  // Outline gold — good over images/dark
  outline:
    'border-2 border-brandGold text-brandGold hover:bg-brandGold hover:text-black hover:-translate-y-0.5',
  // Ghost — subtle
  ghost: 'text-brandCharcoal hover:text-brandOrange hover:bg-black/5',
  // Dark
  dark: 'bg-brandBlack text-white hover:bg-brandCharcoal hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base',
}

/** Button rendered as an <a> (for links / anchors). */
type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
  }

/** Button rendered as a <button>. */
type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type Props = AnchorProps | ButtonProps

function content(
  children: ReactNode,
  iconLeft?: ReactNode,
  iconRight?: ReactNode,
) {
  return (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  )
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      iconLeft,
      iconRight,
      fullWidth,
      ...rest
    },
    ref,
  ) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${
      fullWidth ? 'w-full' : ''
    } ${className}`

    if ((rest as AnchorProps).as === 'a') {
      const { as: _as, ...anchorRest } = rest as AnchorProps
      void _as
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorRest}
        >
          {content(children, iconLeft, iconRight)}
        </a>
      )
    }

    const { as: _as, ...buttonRest } = rest as ButtonProps
    void _as
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonRest}
      >
        {content(children, iconLeft, iconRight)}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
