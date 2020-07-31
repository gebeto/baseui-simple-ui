import * as React from "react";
import {
	Card,
	StyledBody,
	StyledAction
} from "baseui/card";
import {ChevronRight as ChevronRightIcon} from 'baseui/icon';
import { Button, SIZE } from "baseui/button";

const buttonOverrides = {
	BaseButton: { style: { width: "100%" } }
};


export const ProductCard = (props) => {
	return (
		<Card title={props.title}>
			<StyledBody>
				Proin ut dui sed metus pharetra hend rerit vel non
				mi. Nulla ornare faucibus ex, non facilisis nisl.
				Proin ut dui sed metus pharetra hend rerit vel non
				mi. Nulla ornare faucibus ex, non facilisis nisl.
			</StyledBody>
			<StyledAction>
				<Button
					size={SIZE.default}
					overrides={buttonOverrides}
					endEnhancer={<ChevronRightIcon />}
					onClick={props.handeleShowMoreInfo}
				>
					More info
				</Button>
			</StyledAction>
		</Card>
	);
}
