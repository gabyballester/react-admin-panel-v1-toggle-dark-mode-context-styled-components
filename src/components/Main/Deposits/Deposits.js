import { Fragment } from 'react';
import styled from 'styled-components'
import SortingBar from './SortingBar';
import Deposit from './Deposit';
import AllDepositsBtn from '../AllDepositsBtn';

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

const Deposits = ({ title, data, count }) => {
    return (
        <Fragment>
            <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
            <SortingBar />
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.property.address.street} />
            ))}
            <AllDepositsBtn title={title} />
        </Fragment>
    )
}

export default Deposits
