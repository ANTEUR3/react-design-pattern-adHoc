export const ExpensiveComponent=()=>{

    let startTime=performance.now()

    while(performance.now()-startTime<1000){}
    return (
        <></>
    )
}