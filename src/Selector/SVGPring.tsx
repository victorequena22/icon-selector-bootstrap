import React from 'react'
import { Button } from 'react-bootstrap'
import { IconBrute } from '../Interface'

export function SVGPring({ icon, select }: { icon: IconBrute[]; select: (i: IconBrute[]) => void }) {
  return (
    <Button
      key={icon[3] as string}
      size='sm'
      variant='outline-secondary'
      style={{ width: 80, height: 60, margin: '3px 3px 3px 3px' }}
      onClick={() => select(icon)}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox={`0 0 ${icon[0]} ${icon[1]}`}>
        {typeof icon[4] === 'string' ? (
          <path d={icon[4]} />
        ) : (
          (icon[4] as string[]).map((t, i) => <path key={t} style={{ opacity: i === 0 ? 0.5 : undefined }} d={t} />)
        )}
      </svg>
    </Button>
  )
}
