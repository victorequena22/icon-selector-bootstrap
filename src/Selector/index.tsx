import React, { useCallback, useState, CSSProperties, Suspense } from 'react'
import Popover from '@material-ui/core/Popover'
import { Button } from 'react-bootstrap'
import { ControlText } from 'component-bootstrap'
import { icon } from '../Interface'
import { UseIcon } from '../UseIcon'
import Cargando from '../Cargando'
import IconCatalog from './IconCatalog'
interface Props {
  value: icon
  className?: string
  onChange: (v: icon, s?: boolean) => void
  disabled?: boolean
  nullValue?: boolean
  style?: CSSProperties
}
export function IconSelector({
  value,
  onChange,
  className,
  disabled,
  nullValue,
  style = { width: 36, height: 24 },
}: Props) {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState<any>(null)
  const handleClick = useCallback((event: any) => setOpen(event.currentTarget), [])
  const handleClose = useCallback(() => setOpen(null), [])
  return (
    <>
      <Button
        data-tip='SELECCIONAR ICONO'
        disabled={disabled}
        variant='outline-dark'
        style={style}
        size='sm'
        className={className}
        onClick={handleClick}
      >
        <UseIcon width='15' height='15' fill='#000000' icon={value} />
      </Button>
      <Popover
        open={open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <ControlText before='BUSCAR' after={<i className='fa fa-search' />} setData={setSearch} value={search} />
        <Suspense fallback={<Cargando />}>
          <IconCatalog nullValue={nullValue} search={search} close={handleClose} onChange={onChange} />
        </Suspense>
      </Popover>
    </>
  )
}
