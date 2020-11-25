
import { useState } from 'react';


function Home() {
    return <div>
        <h2>LiSi Sistemas Digitais</h2>
        <CapsLock>Humberto Lima Jr</CapsLock>
        <CapsLock>Lisi Sistemas</CapsLock>
        <hr />
        <Contador />
    </div>
}

function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div><font color="red">{textoEmCapsLock}</font></div>
}

function Contador() {

    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home