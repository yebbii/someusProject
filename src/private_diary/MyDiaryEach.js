import axios from 'axios';
import './mydiaryeach.css'
import sampleimage from 'C:/javascript/someus-app/src/img/sampleimage.jpg';


const MyDiaryEach = ({ list }) => {

    // const [ diaryId, setDiaryId ] = useState(0);

    // const handlerClick = () => {
    //     axios.get(`http://localhost:8080/api/someus/private/${diaryId}`)
    //         .then((response) => {
    //             console.log(response);
    //             setDiaryId(response.data.list.diaryId);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    return (
        // <div className='eachdiary'
        //      onClick={ handlerClick }>
        //     <div className='diaryimg'>{ list.diaryImg }</div>
        //     <div className='diarydate'>{ list.createdDt }</div>
        // </ div>
        <div className='eachdiary'>
            <div className='diaryimg'>
                <img src={sampleimage} />
            </div>
            <div className='diarydate'>2023.02.14</div>
        </ div>
    );
}

export default MyDiaryEach;