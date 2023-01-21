import React, { useState, useCallback } from 'react'
import Popover from '@mui/material/Popover'
import { Button } from 'react-bootstrap'
import { IconBrute } from '../Interface'
import { SVGPring } from './SVGPring'

interface IconsVariant {
  solid?: IconBrute[]
  regular?: IconBrute[]
  light?: IconBrute[]
  duotone?: IconBrute[]
  brands?: IconBrute[]
}
export function SelecIcon({
  icons: { solid, regular, light, brands, duotone },
  select,
}: {
  icons: IconsVariant
  select: (i: IconBrute[]) => void
}) {
  const primary = (solid !== undefined ? solid : brands) as IconBrute[]
  const [open, setOpen] = useState<any>(null)
  const handleClick = useCallback((event: any) => setOpen(event.currentTarget), [])
  const handleClose = useCallback(() => setOpen(null), [])
  return (
    <>
      <Button
        key={primary[3] as string}
        size='sm'
        variant='outline-secondary'
        style={{ width: 36, height: 30, margin: '3px 3px 3px 3px' }}
        onClick={handleClick}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox={`0 0 ${primary[0]} ${primary[1]}`}>
          {typeof primary[4] === 'string' ? (
            <path d={primary[4]} />
          ) : (
            (primary[4] as string[]).map((t, i) => (
              <path key={t} style={{ fill: `currentColor`, opacity: i === 0 ? 0.7 : undefined }} d={t} />
            ))
          )}
        </svg>
      </Button>
      <Popover
        open={open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        {solid !== undefined ? <SVGPring icon={solid} select={select} /> : <></>}
        {regular !== undefined ? <SVGPring icon={regular} select={select} /> : <></>}
        {light !== undefined ? <SVGPring icon={light} select={select} /> : <></>}
        {brands !== undefined ? <SVGPring icon={brands} select={select} /> : <></>}
        {duotone !== undefined ? <SVGPring icon={duotone} select={select} /> : <></>}
      </Popover>
    </>
  )
}
