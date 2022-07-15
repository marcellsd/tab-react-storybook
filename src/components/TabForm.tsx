import {FormEvent, useState} from "react"


interface TabFormProps {
    onSubmit: (tabName:string[], tabText:string[]) => void
}
export function TabForm({onSubmit}: TabFormProps){

    const [tabName, setTabName] = useState<string[]>([''])
    const [tabText, setTabText] = useState<string[]>([''])
    const [errors, setErrors] = useState<{[name: string]:string}>({})
    const [touched, setTouched] = useState<{[name: string]:boolean}>({})
    
    function touch(name: string, value: boolean = true){
        setTouched(prevTouched => ({ ...prevTouched, [name]: value}))
    }

    function setError(name: string, error: string) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
      }

      function changeTabName(index: number, value: string) {
        const newTabName = [...tabName]
        newTabName[index] = value
        setTabName(newTabName)
        touch(`tabName_${index}`)
      }

      function changeTabText(index: number, value: string) {
        const newTabText = [...tabText]
        newTabText[index] = value
        setTabText(newTabText)
        touch(`tabText_${index}`)
      }

    function changeNumTabs(value: string) {
        // cria uma função de validação cujo valor deve estar entre 1 e 10
        const range = inRange(1, 10)
    
        // função de validação combina outras funções de validação
        // o erro atribuído será o da primeira que retornar algum erro, devido ao "ou" (||)
        const validateFunc = (value: string) => required(value) || isInt(value) || range(value)
    
        // se passar no teste de validação, altera o tamanho do array `tabText`
        if (check(value, validateFunc, 'numTabs')) {
          const num = parseInt(value)
          if (num <= tabText.length && num <=tabName.length) { // ou reduz o tamanho do array
            for (let i = num; i < tabText.length; i++) {
              touch(`tabText_${i}`, false) // limpa os indicadores de alteraçao das opções removidas
              setError(`tabText_${i}`, '') // limpa as mensagens de erro das opções removidas
              touch(`tabName_${i}`, false) // limpa os indicadores de alteraçao das opções removidas
              setError(`tabName_${i}`, '') // limpa as mensagens de erro das opções removidas
            }
            setTabText(tabText.slice(0, num))
            setTabName(tabName.slice(0,num))
            
          }
          else {  // ou aumenta o tamanho do array com strings vazias nos novos elementos
            const tailName = Array(num - tabName.length).fill('')
            setTabName([...tabName, ...tailName])
            const tailText = Array(num - tabText.length).fill('')
            setTabText([...tabText, ...tailText])
          }
        }
      }

      function submit(e: FormEvent) {
        e.preventDefault()
         const tabNameOk = tabName
          .map((opt, i) => check(opt, required, `tabName_${i}`))
          .every(o => o)
        const tabTextOk = tabText
          .map((opt, i) => check(opt, required, `tabText_${i}`))
          .every(o => o)
          if (tabNameOk && tabTextOk) {
          onSubmit(tabName, tabText)
          console.log("Submeteu")
          }
        }  

    function required(value:string){
        if(value === undefined || value.trim().length === 0){
            return 'Este é um campo obrigatório'
        }
        return null
    }

    function check(value: string, validateFunc: Function, name:string) {
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function isInt(value: string) {
        if (value && isNaN(parseInt(value, 10))) {
          return 'Este campo requer um número inteiro'
        }
        return null
      }
    function inRange(min: number, max: number) {
        return (value: string) => {
          const num = parseInt(value, 10)
          const [vmin, vmax] = min > max ? [max, min] : [min, max]
          if (value && (isNaN(num) || num < vmin || num > vmax)) {
            return `Este campo requer um número inteiro entre ${vmin} e ${vmax}`
          }
          return null
        }
    }

    const tabFormElm = tabName.map((tb,i)=>(
            <div key={`tabAll_${i}`}>
                <div key={`tabName_${i}`}>
                    <label>Título </label>
                    <input type="text" value={tabName[i]}
                     onChange={e => changeTabName(i, e.target.value)}
                     onBlur={e => touched[`tabName_${i}`] && check(e.target.value, required, `tabName_${i}`)}
                    />
                     <div className="error">{ errors[`tabName_${i}`] }</div>
                </div>
                <div key={`tabtext_${i}`}>
                    <label>Conteúdo </label>
                    <input type="text" value={tabText[i]}
                     onChange={e => changeTabText(i, e.target.value)}
                     onBlur={e => touched[`tabText_${i}`] && check(e.target.value, required, `tabText_${i}`)}
                    />
                     <div className="error">{ errors[`tabText_${i}`] }</div>
                </div>
            </div>
    ))
    const numTabsElm = (
        <div>
          <label>Número de Tabs </label>
          <input type="number" value={tabName.length} onChange={e => changeNumTabs(e.target.value)} />
          <div className="error">{ errors.numTabs }</div>
        </div>
      )
      const button = <div>
      <div className="buttons">
        <input type="submit" value="Enviar" />
      </div>
    </div>
    return (
    <form onSubmit={submit}>
        {numTabsElm}
        {tabFormElm}  
        {button}
    </form>
    )
}