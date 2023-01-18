import { useMemo } from 'react'
import { Row, Button } from 'react-bootstrap'
import { SelecIcon } from './SelecIcon'
import { icons } from './icons'
import { icon } from '../Interface'
import React from 'react'
interface Props {
  nullValue?: boolean
  search: string
  close: () => void
  onChange: (v: icon, s?: boolean) => void
}
export default function IconCatalog({ nullValue, search, close, onChange }: Props) {
  return useMemo(() => {
    const labels = Object.keys(icons) as (keyof typeof icons)[]
    const s = labels.filter((i: any) => i.indexOf(search.toLowerCase()) > -1)
    return (
      <Row className='d-flex' style={{ width: 354, maxHeight: 432, margin: '0 0 0 0', overflowY: 'auto' }}>
        <h5 className='text-center w-100'>
          <b>ICONOS {s.length}</b>
          {nullValue ? (
            <Button
              size='sm'
              variant='outline-danger'
              style={{ width: 36, height: 30, margin: '3px 3px 3px 3px' }}
              onClick={() => {
                onChange({ width: 0, height: 0, path: '' }, false)
                close()
              }}
            >
              <i className='fas fa-times' />
            </Button>
          ) : (
            <></>
          )}
        </h5>
        {s
          .filter((_a, i) => (s.length > 100 ? i >= 0 && i <= 95 : true))
          .map((i, t) => (
            <SelecIcon
              key={search + t}
              icons={icons[i] as any}
              select={(i) => {
                onChange({ width: i[0], height: i[1], path: i[4] } as icon, true)
                close()
              }}
            />
          ))}
      </Row>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
}
