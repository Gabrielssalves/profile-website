import React from 'react';
import { IntlProvider } from 'react-intl'
import translations from './Translations.json'
import { LANGUAGES } from './Languages.js';

export default class IntlProviderConfigured extends React.Component {
    state = {
        loading: true,
        locale: ''
    }

    componentDidMount() {
        const currentUrlLang = window.location.pathname.split('/')[1]
        const currentLanguage = LANGUAGES[currentUrlLang]
        if(!currentLanguage) return window.location.href = `/${LANGUAGES.default}`

        this.setState({ locale: currentLanguage.code, loading: false })
    }

    render() {
        const locale = this.state.locale
        const { children } = this.props

        if(this.state.loading) return <div>...</div>

        return (
            <IntlProvider locale={locale} messages={translations[locale]}>
                {children}
            </IntlProvider>
        )
    }
}
