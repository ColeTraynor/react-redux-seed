/**
 * Created by cole on 2017-02-19.
 */


export function openModal(modal) {
  return {
    type: "MODAL_OPEN",
    payload: modal
  }
}

export function closeModal() {
  return openModal('NONE');
}