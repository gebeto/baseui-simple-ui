import * as React from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalButton,
	SIZE,
	ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";

export const InfoModal = (props) => {
	return (
		<Modal
			onClose={props.handeleHideMoreInfo}
			closeable
			isOpen={props.isMoreInfoShown}
			animate
			autoFocus
			size={SIZE.default}
			role={ROLE.dialog}
		>
			<ModalHeader>Hello world</ModalHeader>
			<ModalBody>
				Proin ut dui sed metus pharetra hend rerit vel non
				mi. Nulla ornare faucibus ex, non facilisis nisl.
				Maecenas aliquet mauris ut tempus.
			</ModalBody>
			<ModalFooter>
				<ModalButton onClick={props.handeleHideMoreInfo} kind={ButtonKind.tertiary}>
					Cancel
				</ModalButton>
				<ModalButton>Okay</ModalButton>
			</ModalFooter>
		</Modal>
	);
}
