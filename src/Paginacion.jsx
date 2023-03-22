import React from 'react'

function Paginacion(props) {

const getPagination = () => {
    let resultado = []
    for(let i = 0; i < props.total; i++) {
        resultado.push(<a key={i} onClick={()=> props.onChange(i + 1)}
             className={props.pagina === (i + 1)? "active" : ""  }
             >{i + 1}</a>
        )
    }
    return resultado
}
  return (
    <>
    
        	<div className="topbar-filter">
				
					<div className="pagination2">
						<span>Page {props.pagina} of {props.total}:</span>
                        {getPagination()}
					
					</div>
			</div>
    </>
  )
}

export default Paginacion