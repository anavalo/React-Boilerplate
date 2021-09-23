import {useContext, useEffect} from "react";
import {StateContext,DispatchContext} from "context/DataContext";
import {useAuthDataContext} from "context/AuthContext";
import {getCrewList} from 'services/services'
import CrewListView from './CrewListView'

const CrewListContainer = () => {

    const dispatch = useContext(DispatchContext)
    const stateContext = useContext(StateContext)
    const {authData:{yachtid,username}} = useAuthDataContext()

    useEffect(() => {
        getCrewList(yachtid,username).then((data)=>dispatch({type:'crewList',payload:data.crew}))
    }, [dispatch,yachtid,username]);

    return(
        <CrewListView crewList={stateContext['crewList']}/>
    )
}

export default CrewListContainer

