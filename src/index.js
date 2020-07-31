import React from 'react';
import ReactDOM from 'react-dom';

import {Provider as StyletronProvider} from 'styletron-react';

import {LightTheme, BaseProvider, styled, useStyletron} from 'baseui';
import {Input} from 'baseui/input';
import {Button, SIZE, KIND} from 'baseui/button';
import {Search as SearchIcon} from 'baseui/icon';
import {Grid, Cell} from 'baseui/layout-grid';
import { Display1, Display2, Display3, Display4 } from 'baseui/typography';

import { engine } from './styles';

import { ProductCard } from './Card';
import { InfoModal } from './InfoModal';


const Outer = ({children}) => {
	const [css, theme] = useStyletron();
	return (
		<div
			className={css({
				background: theme.colors.accent100,
			})}
		>
			{children}
		</div>
	);
};

export const App = () => {
	const [ infoShown, setInfoShown ] = React.useState(false);

	const handleInfoShow = () => setInfoShown(true);
	const handleInfoHide = () => setInfoShown(false);

	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<Grid gridGaps={62}>
					<Cell span={12} align="center">
						<Display1 display="flex" justifyContent="center" marginTop="1em">Spaple.</Display1>
					</Cell>
					<Cell skip={3} span={6}>
						<Input
							autoFocus
							placeholder="Search query..."
							endEnhancer={<SearchIcon onClick={alert} />}
						/>
					</Cell>
					<Cell span={12}>
						<Grid gridGaps={12} gridGutters={12}>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
							<Cell span={4}>
								<ProductCard handeleShowMoreInfo={handleInfoShow} title="Hello world" />
							</Cell>
						</Grid>
						<InfoModal isMoreInfoShown={infoShown} handeleHideMoreInfo={handleInfoHide} />
					</Cell>
				</Grid>
			</BaseProvider>
		</StyletronProvider>
	);
}


ReactDOM.render(<App />, document.querySelector('#root'));
