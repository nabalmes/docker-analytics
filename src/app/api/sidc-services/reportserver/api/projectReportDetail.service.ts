/**
 * SIDC Report Generator Core
 * Our Endpoints are powered by .Net Core, Onion Architecture, CQRS with MediatR Library,Entity Framework Core - Code First,Repository Pattern - Generic, Swagger UI, API Versioning,Fluent Validation and Automapper.
 *
 * OpenAPI spec version: v1
 * Contact: sidcmisdepartment@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreateProjectReportDetailCommand } from '../model/createProjectReportDetailCommand';
import { UpdateProjectReportDetailCommand } from '../model/updateProjectReportDetailCommand';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProjectReportDetailService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param version 
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVversionProjectsProjectReportDetailGet(version: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiVversionProjectsProjectReportDetailGet(version: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiVversionProjectsProjectReportDetailGet(version: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiVversionProjectsProjectReportDetailGet(version: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVversionProjectsProjectReportDetailGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/api/v${encodeURIComponent(String(version))}/projects/ProjectReportDetail`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVversionProjectsProjectReportDetailIdDelete(id: number, version: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiVversionProjectsProjectReportDetailIdDelete(id: number, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiVversionProjectsProjectReportDetailIdDelete(id: number, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiVversionProjectsProjectReportDetailIdDelete(id: number, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiVversionProjectsProjectReportDetailIdDelete.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVversionProjectsProjectReportDetailIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v${encodeURIComponent(String(version))}/projects/ProjectReportDetail/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVversionProjectsProjectReportDetailIdGet(id: number, version: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiVversionProjectsProjectReportDetailIdGet(id: number, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiVversionProjectsProjectReportDetailIdGet(id: number, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiVversionProjectsProjectReportDetailIdGet(id: number, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiVversionProjectsProjectReportDetailIdGet.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVversionProjectsProjectReportDetailIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/api/v${encodeURIComponent(String(version))}/projects/ProjectReportDetail/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param version 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVversionProjectsProjectReportDetailIdPut(id: number, version: string, body?: UpdateProjectReportDetailCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiVversionProjectsProjectReportDetailIdPut(id: number, version: string, body?: UpdateProjectReportDetailCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiVversionProjectsProjectReportDetailIdPut(id: number, version: string, body?: UpdateProjectReportDetailCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiVversionProjectsProjectReportDetailIdPut(id: number, version: string, body?: UpdateProjectReportDetailCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiVversionProjectsProjectReportDetailIdPut.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVversionProjectsProjectReportDetailIdPut.');
        }


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/v${encodeURIComponent(String(version))}/projects/ProjectReportDetail/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param version 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVversionProjectsProjectReportDetailPost(version: string, body?: CreateProjectReportDetailCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiVversionProjectsProjectReportDetailPost(version: string, body?: CreateProjectReportDetailCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiVversionProjectsProjectReportDetailPost(version: string, body?: CreateProjectReportDetailCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiVversionProjectsProjectReportDetailPost(version: string, body?: CreateProjectReportDetailCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVversionProjectsProjectReportDetailPost.');
        }


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v${encodeURIComponent(String(version))}/projects/ProjectReportDetail`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
