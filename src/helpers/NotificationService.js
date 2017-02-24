/**
 * Created by cole on 2017-02-16.
 */
import { toastr } from 'react-redux-toastr';

class NotificationService {
  error(error) {
    toastr.error(error);
  }
}

export default new NotificationService();