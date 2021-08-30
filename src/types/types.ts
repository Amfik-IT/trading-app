export type PayloadType = {
    count: number,
    fullCount: number,
    data: ItemType[]
}
export type ItemType = {
    asset: string
    income: number
    incomeType: string
    info: string
    symbol: string
    time: string
    tradeId: string
    tranId: number
    __v: number
    _id: string
}