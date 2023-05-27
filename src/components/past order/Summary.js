import { useEffect, useState } from "react"
// import { useEffect} from "react"
import SummaryFooter from "./SummaryFooter"
import SummaryHeader from "./SummaryHeader"

function Summary({ sendData, productSummaryInfo }) {
    const [info, setInfo] = useState("")
    useEffect(() => {
        setInfo(productSummaryInfo)
        console.log(productSummaryInfo)
    }, [productSummaryInfo])

    const total = () => {
        if (info.length) {
            let totalPrice = 0
            for (let i = 0; i < info.length; i++) {
                let inp = info[i]
                for (let x in inp) {
                    if (x === "price") {
                        totalPrice += inp[x]
                    }
                }
            }
            return totalPrice 
        }
    }

    return <><div className="summary-page">
        <SummaryHeader />
        <section className="summary-section1">

            <div className="summary-address">
                <div style={{ fontWeight: "bold" }}>
                    Store Address:
                </div>

                <div style={{ fontWeight: "bold" }}>Store Phone</div>
                <div style={{ fontSize: "13px" }}>HN 52 kankhal, Haridwar</div>
                <div style={{ fontSize: "13px" }}>8874979010</div>

            </div>
            <div className="summary-orders">
                <h6>Orders</h6>
                {info.length && info.map(item => {
                    return <tbody className="table1">
                        <tr className="list">
                            <td className="list-product">{item.product}</td>
                            <td className="list-serviceArray">{`${info.length? item.serviceArray:""}`}</td>
                            <td className="list-price"><span className="list-product">{item.quantity}X{item.sum} =</span>{item.price}</td>
                        </tr>
                    </tbody>
                })}

            </div>
            <table>
                <tbody className="table3">
                    <tr >
                        <td style={{ color: "white", fontSize: "18px",textAlign:"end" }}>Total price</td>
                        <td style={{ color: "white", fontSize: "22px",textAlign:"center" }}><span>₹ </span>{total()}</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <SummaryFooter sendData={sendData} />
        <div>

        </div>
    </div>
    </>
}
export default Summary