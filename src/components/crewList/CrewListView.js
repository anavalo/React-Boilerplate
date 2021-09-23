import {CrewListContainer} from "components/crewList/styles";
import {TableHeader,ListTh,ListTd} from 'commons/ui/styles'

const CrewListView = ({crewList}) => {
 
    return(
        <>
            <CrewListContainer>
                <TableHeader>Crew list</TableHeader>
                {crewList &&
                <table className={"table crew-list"}>
                    <thead>
                    <tr className={"no-border"}>
                        <ListTh align={"left"} smallBold>CREW LIST</ListTh>
                        <ListTh align={"left"} smallBold>RANK</ListTh>
                        <ListTh>&nbsp;</ListTh>
                    </tr>
                    </thead>
                    <tbody>
                    {crewList.map((crew,i)=>{
                        return(
                            <tr key={i}>
                                <td>
                                    <ListTd primary column crewlist>
                                        <span>{crew.surname && crew.surname} {crew.name && crew.name}</span>
                                        <span>{crew.yachtname && crew.yachtname}</span>
                                    </ListTd>
                                </td>
                                <td>
                                    <ListTd primary column crewlist>
                                        <span>{crew.rank && crew.rank}</span>
                                        <span>&nbsp;</span>
                                    </ListTd>
                                </td>
                                <td>
                                    <ListTd primary column crewlist>
                                        <span>{crew.status && crew.status}</span>
                                        <span>&nbsp;</span>
                                    </ListTd>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>}
            </CrewListContainer>
        </>
    )
}

export default CrewListView