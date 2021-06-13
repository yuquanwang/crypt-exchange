import DataSet from '@antv/data-set'
import {
    Axis, Chart, Interval, Legend, Schema, Tooltip, View
} from 'bizcharts'
import React, { useEffect, useState } from 'react'


export default function CandlestickChart() {
    const [data, setData] = useState<Datum[]>()
    useEffect(() => {
        fetch('https://alifd.alibabausercontent.com/materials/@bizcharts/candlestick-basic/0.3.2/mock.json')
            .then(res => res.json())
            .then(data => {
                const ds = new DataSet()
                const dv = ds.createView()
                dv.source(data)
                    .transform({
                        type: 'map',
                        callback: obj => {
                            obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌'
                            obj.range = [obj.start, obj.end, obj.max, obj.min]
                            return obj
                        }
                    })
                setData(dv.rows)
            })
    }, [])

    return (
        <Chart
            height={300}
            data={data}
            autoFit
            scale={{
                time: { type: 'timeCat', range: [0, 1], tickCount: 4 },
                volumn: { alias: '成交量' },
                start: { alias: '开盘价' },
                end: { alias: '收盘价' },
                max: { alias: '最高价' },
                min: { alias: '最低价' },
                range: { alias: '股票价格' }
            }}>
            <Tooltip
                showTitle={false}
                showMarkers={true}
                itemTpl={'<li class="g2-tooltip-list-item" data-index={index}>'
                    + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
                    + '{name}{value}</li>'}
            />

            <View
                data={data}
                region={{ start: { x: 0, y: 0 } as unknown as number, end: { x: 1, y: 0.7 } as unknown as number, }}>
                <Schema
                    position={'time*range'}
                    shape={'candle'}
                    color={['trend', val => val === '上涨' ? '#f04864' : '#2fc25b']}
                    tooltip={[
                        'time*start*end*max*min',
                        (time, start, end, max, min) => {
                            return {
                                name: time,
                                value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
                                    + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
                                    + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
                                    + '<span style="padding-left: 16px">最低价：' + min + '</span>'
                            }
                        }
                    ]}
                />
            </View>

            <View
                data={data}
                region={{ start: { x: 0, y: 0.7 } as unknown as number, end: { x: 1, y: 1 } as unknown as number }}
                scale={{ volumn: { tickCount: 2 } }}>
                <Axis name="time" tickLine={null} label={null} />
                <Axis name="volumn" label={{ formatter: val => { return +val / 1000 + 'k' } }} />
                <Interval
                    position={'time*volumn'}
                    color={['trend', val => val === '上涨' ? '#f04864' : '#2fc25b']}
                    tooltip={[
                        'time*volumn',
                        (time, volumn) => (
                            { name: time, value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>' }
                        )]} />
            </View>
            <Legend visible={false} />
        </Chart>)
}

interface Datum {
    end: number
    max: number
    min: number
    money: number
    range: [number, number, number, number]
    start: number
    time: string
    trend: string
    volumn: number
}