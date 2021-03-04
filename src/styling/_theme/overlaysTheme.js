import * as React from "react"

import { colorsTheme } from "@theme"

const overlaysTheme = () => {
  return {
    layout: {
      backdrop: {
        bottomsheet: {},
      },
      bottomsheet: {
        background: colorsTheme("blue", { colorUnit: "rgba", opacity: 0.95 }),
        backdropFilter: 10, // value in PX //
      },
      modalInner: {
        background: colorsTheme("whitegray", {
          colorUnit: "rgba",
          opacity: 0.3,
        }),
        backdropFilter: 10, // value in PX
      },
      modalCard: {
        background: colorsTheme("whitegray", {
          colorUnit: "rgba",
          opacity: 0.7,
        }),
        backdropFilter: 10, // value in PX
      },
    },
    modals: {
      // navbarLaptop: {
      //   ModalHorarios: props => (
      //     <BottomSheet {...props}>
      //       <FaleConosco />
      //     </BottomSheet>
      //   ),
      //   ModalPesquisa: props => (
      //     <BottomSheet {...props}>
      //       <FaleConoscoFormWrapper />
      //     </BottomSheet>
      //   ),
      // },
      // navbarMobile: {
      //   ModalFaleConosco: props => (
      //     <BottomSheet {...props}>
      //       <FaleConosco />
      //     </BottomSheet>
      //   ),
      //   ModalAmbientes: props => (
      //     <BottomSheet {...props}>
      //       <FaleConoscoFormWrapper />
      //     </BottomSheet>
      //   ),
      //   ModalMap: props => (
      //     <BottomSheet {...props}>
      //       <Map />
      //     </BottomSheet>
      //   ),
      //   ModalInstitutional: props => (
      //     <BottomSheet {...props}>
      //       <Institutional />
      //     </BottomSheet>
      //   ),
      //   ModalAgendamento: props => (
      //     <BottomSheet {...props}>
      //       <Institutional />
      //     </BottomSheet>
      //   ),
      // },
      // faleConosco: {
      //   ModalFaleConoscoForm: props => (
      //     <BottomSheet {...props}>
      //       <FaleConoscoFormWrapper />
      //     </BottomSheet>
      //   ),
      // },
    },
  }
}

export default overlaysTheme
