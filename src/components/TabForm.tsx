import {FormEvent, useState} from "react"

export function TabForm(){

    const [statement, setStatement] = useState('')
    const [options, setOptions] = useState<string[]>(['','',''])
    const [errors, setErrors] = useState<{[name: string]:string}>({})
    const [touched, setTouched] = useState<{[name: string]:boolean}>({})
    

    function changeStatement(value:string){
        setStatement(value)
        const newTouched = {...touched}
        newTouched['statError'] = true
        setTouched(newTouched)

    }

    function changeOption(index:number, value:string){
        const newOptions = [...options]
        newOptions[index] = value
        setOptions(newOptions)
    }

    function onSubmit(e: FormEvent){
        e.preventDefault()
        const statOK =  check(statement, required, 'statError')
        const optOK =  options.map((opt,i)=>{
            return check(opt,(value:string) => minLen(value,2),`optError_${i}`)
        }).every(o => o)
        if (statOK && optOK){

        }
    }   

    function required(value:string){
        if(value === undefined || value.trim() === ''){
            return 'Este é um campo obrigatório'
        }
        return null
    }

    function check(value: string, validateFunc: Function, name:string) {
        const error = validateFunc(value)
        const newErrors = {...errors}
        newErrors[name] = error
        setErrors(newErrors)
        return error === null
    }

    function minLen(value: string, min:number){
        const v = value.trim()
        if (v.length < min){
            return `Este campo requer pelo menos ${min} caracteres`
        }
        return null
    }

    const stateElm = (
        <div>
            <label>Enunciado: </label>
            <input value = {statement} 
            onChange={e => changeStatement(e.target.value)}
            onBlur={e => check(e.target.value, required, 'statError')}
            />
            <div>{errors.statError}</div>
        </div>
    )

    const optionsElm = options.map((opt,i) =>(
        <div key={`option_${i}`}>
        <label>Opção {i+1} </label>
        <input value = {options[i]} onChange={e => changeOption(i, e.target.value)}
        onBlur={e => check(e.target.value, (value:string) => minLen(value,2),`optError_${i}`)}
        />
        <div>{errors[`optError_${i}`]}</div>
        </div>
    ))

    return (
    <form onSubmit={onSubmit}>
      {stateElm}
      {optionsElm}  
      <input type="submit" value='Enviar'/>
    </form>
    )

}