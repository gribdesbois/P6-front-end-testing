import calendarIcon from '../assets/svg/calendar.js'
import euroIcon from '../assets/svg/euro.js'
import pctIcon from '../assets/svg/pct.js'
import eyeWhite from '../assets/svg/eye_white.js'
import downloadWhite from '../assets/svg/download_white.js'

export default () => {
  return (`
    <div class="container dashboard-form">
      <div class="row">
        <div class="col-sm" id="dashboard-form-col1">
          <label for="expense-type" class="bold-label">Type de dépense</label>
          <div class='input-field'> Avion </div>
          <label for="expense-name" class="bold-label">Nom de la dépense</label>
          <div class='input-field'> Vol Paris Londres </div>
          <label for="datepicker" class="bold-label">Date</label>
          <div class='input-field input-flex'>
            <span>26/06/20</span>
            <span> ${calendarIcon} </span>
          </div>
        </div>
        <div class="col-sm" id="dashboard-form-col2">
          <label for="commentary" class="bold-label">Commentaire</label>
          <div class='textarea-field' style="height: 300px;"> Voici la demande de remboursement de mon vol en direction de Londres </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <label for="amount" class="bold-label">Montant TTC </label>
          <div class='input-field input-flex'>
            <span>348</span>
            <span> ${euroIcon} </span>
          </div>
        </div>
        <div class="col-sm">
          <label for="vat" class="bold-label">TVA</label>
          <div id='vat-flex-container'>
            <div class='input-field input-flex vat-flex'>
              <span>70</span>
              <span> ${euroIcon} </span>
            </div>
            <div class='input-field input-flex vat-flex'>
              <span>20</span>
              <span> ${pctIcon} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <label for="file" class="bold-label">Justificatif</label>
            <div class='input-field input-flex file-flex'>
            <span>Ticket.jpeg</span>
            <div class='icons-container'>
              <span data-testid="icon-eye-d"> ${eyeWhite} </span>
              <span data-testid="icon-download-d"> ${downloadWhite} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <label for="commentary-admin" class="bold-label">Ajouter un commentaire</label>
          <textarea class="form-control blue-border" data-testid="commentary2" rows="5"></textarea>
        </div>
      </div>
      <div class="row">
      <div class="col-sm buttons-flex" style="width: 300px;" >
        <button type="submit" id='btn-refuse-bill' class="btn btn-primary">Refuser</button>
        <button type="submit" id='btn-accept-bill' class="btn btn-primary">Accepter</button>
      </div>
    </div>
    </div>
  `)
}