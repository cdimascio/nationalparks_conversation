import DiscourseService from '../../services/discourse';
import BaseController from '../base.controller'

export class Controller extends BaseController {
  messages(req, res) {
    DiscourseService
      .message(req.body)
      .subscribe(this.responseObserver(res, 'messages'));
  }
}
export default new Controller();