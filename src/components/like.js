import React, { useEffect, useState } from "react"

export default function Like() {

    const [items, setItems] = useState([])

    useEffect(() => {
        loadData()
      }, [])

      const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(x => x.json())
          .then(response => {
            setItems(response)
        }).catch(e => {
          console.log(e)
        })
      }
      const renderBody = () => {
      return (
        <React.Fragment>
          {items.sort((a, b) => a.id - b.id).map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row" >{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </React.Fragment>
      )
     }

    return (
        <>
         <h1>Kahve demleme tekniklerimizi deneyimleyip beğendiklerini bildirenler <i className="material-icons">favorite</i></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İsim</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            <p className="card-text text-center fs-5">İlginize Teşekkür Ederiz <i className="material-icons">local_florist</i></p>
        </>
    )
}