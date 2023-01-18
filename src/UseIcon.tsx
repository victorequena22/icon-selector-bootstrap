import React from 'react'
import { icon } from './Interface'

interface Props {
  fill: string
  width: number | string
  height: number | string
  icon: icon
}
export function UseIcon({ width, height, icon, fill }: Props) {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${icon.width} ${icon.height}`}>
      {typeof icon.path === 'string' ? (
        <path style={{ fill }} d={icon.path} />
      ) : (
        (icon.path as string[]).map((t, i) => (
          <path key={t} d={t} style={{ fill, opacity: i === 0 ? 0.7 : undefined }} />
        ))
      )}
    </svg>
  )
}
