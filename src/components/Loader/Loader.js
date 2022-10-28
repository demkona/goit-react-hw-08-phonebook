import { Oval } from 'react-loader-spinner'
import { LoaderBox } from './Loader.styled'

const Loader = () => {
    return (
        <LoaderBox>
            <Oval
                height={80}
                width={80}
                color="#000000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#000000"
                strokeWidth={5}
                strokeWidthSecondary={5} />
        </LoaderBox>
    )
};

export default Loader;