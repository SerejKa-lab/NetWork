import React from 'react';
import styles from './Pagginator.module.css'



class Pagginator extends React.Component {

    state = {
        inputError: false,
        displayNumber: null,
        inputMode: false
    }

    componentDidMount() { this.setState({ displayNumber: this.props.currentPage }) };

    setInputMode = (e) => {
        this.setState({ inputMode: true })
        this.checkDisplayValue(e)
    }

    disableInputMode = () => {
        this.setState({ inputMode: false })
    }

    checkDisplayValue = (e) => {
        const { startPage, finishPage } = this.props;
        const nextPage = e.currentTarget.value;
        if (nextPage >= startPage && nextPage <= finishPage) {
            this.setState({ inputError: false, displayNumber: nextPage }) //получать в дисплей значение извне
        } else {
            this.setState({ displayNumber: nextPage }) //получать значение извне
            this.setState({ inputError: true })
        }
    }

    setPageOnEvent = (e) => {
        const { startPage, finishPage, currentPage, dispatchNewPage } = this.props;
        const nextPage = +e.currentTarget.value;
        if (nextPage >= startPage && nextPage <= finishPage && nextPage !== currentPage) {
            this.setState({ inputError: false });
            dispatchNewPage(nextPage)
        } else {
            if (nextPage !== currentPage) this.setState({ inputError: true })
        }
    }

    setPageOnKey = (e) => {
        if (e.key === 'Enter') {
            this.setPageOnEvent(e);
            this.setState({ inputMode: false })
        }
    }


    render() {

        const { currentPage, startPage, finishPage, dispatchNewPage } = this.props

        return (
            <section className={styles.pagginatorWrapper}>
                <nav className={styles.paginator}>
                    {currentPage !== startPage
                        && <span className={styles.button}
                            onClick={() => dispatchNewPage(startPage)}>First</span>
                    }

                    {this.state.inputMode
                        ? <input type='number' value={this.state.displayNumber}
                            min={startPage} max={finishPage}
                            className={this.state.inputError ? styles.inpError : ''}
                            onClick={this.setPageOnEvent}
                            onKeyPress={this.setPageOnKey}
                            onChange={this.checkDisplayValue}
                            onBlur={this.disableInputMode} />
                        : <input type='number' value={currentPage}
                            min={startPage} max={finishPage}
                            onInput={this.setInputMode}
                            onClick={this.setPageOnEvent} 
                            onChange={()=>{}}/>
                    }
                    {currentPage !== finishPage
                        && <span className={styles.button}
                            onClick={() => dispatchNewPage(finishPage)}>Last</span>
                    }
                </nav>
            </section>
        )
    }
}

export default Pagginator;