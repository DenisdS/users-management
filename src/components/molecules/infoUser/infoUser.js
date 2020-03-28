import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../../organisms/usersList/usersList'

const InfoUser = () => {

  const [idUser] = useContext(ListUserContext);
  const [infoUser, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${idUser}`);
      const data = await response.json();
      setInfo(data);
    };
    fetchData();
  }, [idUser]);

  return(
    <section>
       { infoUser.map(info => (
        <div key={info.id}>
          <h2>{info.name}</h2>

          <h3>Endereço</h3>
          <p>{info.address.street} - {info.address.suite}</p>
          <p>{info.address.city} {info.address.zipcode}</p>
        </div>
      ))}
    </section>
  )
}
export default InfoUser;
