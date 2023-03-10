import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, Observable, throwError } from 'rxjs';

// INTERFACE
import { environment } from 'src/environments/environment';

@Injectable()
export class GeocodingService {
  data: EventEmitter<any> = new EventEmitter();

  /**
   * Creates an instance of SurveyService.
   * @param {HttpClient} http
   * @memberof SurveyService
   */
  constructor(private _http: HttpClient) {
  }

  /**
   * @param {string} playlistId
   * @return {*}  {Observable<Survey>}
   * @memberof SurveyService
   */
  getState(lat: number, lng: number): Observable<any> {
    const URL = environment.google.api + 'geocode/json?latlng=' + lat + ',' + lng + '&key=' + environment.google.key + '&sensor=false';

    return this._http.get<Response>(URL).pipe(
      map(this._extractData),
      catchError((res: any) => this._handleError(res)),
    );
  }

  /**
   * @private
   * @param {*} error
   * @return {*}  {Observable<any>}
   * @memberof SurveyService
   */
  _handleError(error: Error | any): Observable<any> {
    if (
      error instanceof HttpErrorResponse &&
      error.error instanceof Object &&
      error.error.errors &&
      error.error.errors instanceof Array
    ) {
      const ERRORS = this._errorResponse(error.error.errors[0]);
      return throwError(ERRORS);
    }

    return throwError(error);
  }

  /**
   * @private
   * @param {Response} res
   * @return {*}
   * @memberof SurveyService
   */
  _extractData(res: any) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error(res);
    }

    return res;
  }

  /**
   * @param {string} errors
   * @memberof SurveyService
   */
  _errorResponse(errors: string): void {
    if (errors !== undefined) {
      errors = errors;
    }
  }
}
